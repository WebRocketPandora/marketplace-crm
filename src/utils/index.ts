export function toQueryString<T>(params: T) {
  return Object.entries(params as Object)
    .map(([key, value]) => (String(value).length !== 0 ? `${key}=${value}` : ""))
    .join("&")
}

export const blobToFile = (theBlob: Blob): File => {
  var b: any = theBlob

  b.lastModifiedDate = new Date()
  b.name = b.lastModifiedDate

  return theBlob as File
}
