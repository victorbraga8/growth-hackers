
class Helpers{
  limpaDuplicados(arr:any, key:any){
    const index:any[] = [];
    return arr.filter(function (item:any) {
        const k = key(item);
        return index.indexOf(k) >= 0 ? false : index.push(k);
    });
  }
}

module.exports = new Helpers();