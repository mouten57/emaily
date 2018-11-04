function localtunnel {
    lt -s mouten57 --port 5000
}
until localtunnel; do
echo "local tunnel server crashed"
sleep 2
done