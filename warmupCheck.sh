sudo docker run -d --name TestSite -p $2:$3 $1
sleep 10
statusCode=$(curl -LI http://localhost:$2 -o /dev/null -w '%{http_code}\n' -s)
if [ $statusCode -eq 200 ]
then
	echo "Site warmup is fine, continuing..."
else
	echo "something went wrong, either site is not running properly or warmup not completed yet."
	echo "StatusCode: $statusCode"
	echo "checking docker logs..."
	sudo docker logs TestSite
	echo "exiting pipeline..."
	exit 1
fi

