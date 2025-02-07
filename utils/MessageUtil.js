const MessageList = [];
MessageList["not.found.in.master"] = "{0}: {1} tidak terdaftar";
MessageList["found.duplicate"] = "data duplikat ditemukan {0} : [{1}]";
MessageList["found.duplicate.entry"] =
  "Tidak bisa menambahkan {0}, data yang dimasukkan telah terdaftar";
MessageList["not.found"] = "Data tidak ditemukan";
MessageList["found"] = "Data ditemukan";
MessageList["create"] = "{0} data berhasil dibuat";
MessageList["update"] = "{0} data berhasil diubah";
MessageList["delete"] = "{0} data berhasil dihapus";
MessageList["created"] = "Data berhasil disimpan";
MessageList["updated"] = "Data berhasil diubah";
MessageList["deleted"] = "Data berhasil dihapus";
MessageList["not.access"] = "Anda tidak memiliki akses!";

String.prototype.format = function (args) {
  var str = this;
  return str.replace(String.prototype.format.regex, function (item) {
    var intVal = parseInt(item.substring(1, item.length - 1));
    var replace;
    if (intVal >= 0) {
      replace = args[intVal];
    } else if (intVal === -1) {
      replace = "{";
    } else if (intVal === -2) {
      replace = "}";
    } else {
      replace = "";
    }
    return replace;
  });
};
String.prototype.format.regex = new RegExp("{-?[0-9]+}", "g");

const GetMsg = (code, ...param) => {
  return MessageList[code].format(param);
};

module.exports = { GetMsg };
