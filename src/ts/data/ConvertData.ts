export default class ConvertData {
  static arrayToJson(arr: InterfaceFinanciamento[]) {
    return JSON.stringify(arr, null, 2);
  }

  static jsonToArray(arr: string): InterfaceFinanciamento[] {
    return JSON.parse(arr);
  }
}
