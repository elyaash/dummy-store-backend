# from the dropdown at the top of Cloud Console:
export GCLOUD_PROJECT="my-project-85301" 
# from Step 2.2 above:
export REPO="expressjs"
# the region you chose in Step 2.4:
export REGION="us-east1"
# whatever you want to call this image:
export IMAGE="dummy-store-backend"

# use the region you chose above here in the URL:
export IMAGE_TAG=${REGION}-docker.pkg.dev/$GCLOUD_PROJECT/$REPO/$IMAGE

# Build the image:
docker build -t $IMAGE_TAG -f ./Dockerfile --platform linux/x86_64 .
# Push it to Artifact Registry:
docker push $IMAGE_TAG