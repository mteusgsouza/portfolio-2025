export default function FormatParams(params: any) {
  const _params = new URLSearchParams(params)
  return _params.toString()
}
