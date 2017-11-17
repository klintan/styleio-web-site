<?php
echo json_encode(glob("img/startup/*.{jpg,gif,png}", GLOB_BRACE), JSON_UNESCAPED_SLASHES);
?>