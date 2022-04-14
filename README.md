# Revitron Charts

## Docker

### Building the Image

In order to build the Docke image, simply clone it into some temporary directory and use the `build` command.

    git clone https://github.com/revitron/revitron-charts.git .
    docker build -t revitron/charts .
### Run the Container

After successfully building the image, we can now run it and pass the required environment variables:

    docker run -d -p 80:80 \
               -e RC_API_KEY="XXX" \
               -e RC_API_URL="https://url/to/directus" \
               -e RC_DISPLAY_UNIT="meter" \
               --name revitron \
               revitron/charts