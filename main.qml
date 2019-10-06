import QtQuick 2.2
import Painter 1.0
import "js/GetAllFilesInDirectory.js" as GAFID

PainterPlugin
{
  Component.onCompleted:
  {
    var file_urls = GAFID.GetAllFilesInDirectory("D:/_temp/Substance")
    alg.log.info(file_urls)
  }
}