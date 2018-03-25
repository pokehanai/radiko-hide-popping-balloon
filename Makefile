SRC = extension-icon.png \
      handler.js \
      manifest.json

TARGET = radiko-hide-popping-balloon.zip

all: zip

zip: $(TARGET)

$(TARGET): $(SRC)
	zip $(TARGET) $(SRC)
