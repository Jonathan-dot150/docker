\# sur le nœud où le volume est physiquement présent

docker run --rm -v others-data:/data -v $(pwd):/backup ubuntu \\

  tar czf /backup/others-data-$(date +%F).tgz -C /data .





\# restart



docker volume create others-data

docker run --rm -v others-data:/data -v $(pwd):/backup ubuntu \\

&nbsp; bash -c "cd /data \&\& tar xzf /backup/others-data-2025-12-01.tgz"



