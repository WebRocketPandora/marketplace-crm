import React from "react"
import {Link} from "react-router-dom"

import {Controller, useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

import {Input} from "~elements/."
import {EyeClosed, EyeOpened} from "~icons/."
import {LoginArgs} from "~api/routes/auth"
import {useAuth} from "~hooks/."
import {Page, Preloader} from "~components/."

const schema = yup
  .object({
    email: yup.string().email("Недопустимый формат").required("Обязательное поле"),
    password: yup.string().required("Обязательное поле"),
  })
  .required()

const Login: React.FC = () => {
  const [eyeOpen, setEyeOpen] = React.useState<boolean>(false)

  const switchEye = () => setEyeOpen(!eyeOpen)

  const AccessoaryRight = React.useCallback(() => {
    return (
      <button type="button" onClick={switchEye}>
        {eyeOpen ? <EyeOpened /> : <EyeClosed />}
      </button>
    )
  }, [eyeOpen])

  const {control, handleSubmit} = useForm<LoginArgs>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const {login, loading} = useAuth()

  const onSubmit = (args: LoginArgs) => login(args)

  if (loading) return <Preloader />

  return (
    <Page title="Вход" className=" h-screen flex flex-grow flex-col">
      <p className="t1 text-black-50 mt-10 text-center">LOGO</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col items-center justify-center">
        <Controller<LoginArgs>
          control={control}
          name="email"
          render={({field, fieldState: {error}}) => (
            <Input
              label={"Email"}
              className={"w-full sm:max-w-89"}
              error={error?.message}
              inputProps={{type: "email", ...field}}
            />
          )}
        />
        <Controller<LoginArgs>
          control={control}
          name="password"
          render={({field, fieldState: {error}}) => (
            <Input
              label={"Password"}
              className="mt-6 w-full sm:max-w-89"
              accessoaryRight={<AccessoaryRight />}
              error={error?.message}
              inputProps={{
                type: eyeOpen ? "text" : "password",
                ...field,
              }}
            />
          )}
        />
        <button type="submit" className="w-full sm:max-w-89 btn btn-blue mt-11">
          Вход
        </button>
        <Link to="#" className="mt-6 link">
          Сбросить пароль
        </Link>
      </form>
    </Page>
  )
}

export default Login
