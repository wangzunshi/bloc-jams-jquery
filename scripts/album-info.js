{
  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src', album.albumArtUrl);

  //assignment work//

  $('.artist').text(album.artist);
  $('#release-info').text(album.releaseInfo);

}
