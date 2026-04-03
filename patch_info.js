const MANIFEST_URL = "https://cdn.jsdelivr.net/gh/ghcruise/LimbusCompany-IOS-Localization@main/manifest.json";

$httpClient.get(MANIFEST_URL, function(err, resp, data) {
  if (err) {
    $done({});
    return;
  }
  $done({
    status: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: data
  });
});
