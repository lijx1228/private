const ZIP_URL = "https://cdn.jsdelivr.net/gh/ghcruise/LimbusCompany-IOS-Localization@main/localize_jp.zip";

$httpClient.get(ZIP_URL, function(err, resp, data) {
  if (err) {
    $done({});
    return;
  }
  $done({
    status: 200,
    headers: {
      "Content-Type": "application/zip"
    },
    body: data
  });
});
