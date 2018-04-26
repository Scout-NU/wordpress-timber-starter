gulp build
rsync -arLvz --size-only --ipv4 --progress -e 'ssh -p 22' ./build myuser@mydestination:/path/to/wp-content/themes/my-theme
echo "Deployed"
open "staging-site.url.com"
