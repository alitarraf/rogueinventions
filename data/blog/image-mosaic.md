---
date: 2018-08-15
title: Create a mosaic of pictures for free with Image Magick and GIMP
tags: ['imagemagick', 'gimp', 'photography']
author: Ali Tarraf
draft: false
summary: Image magic mosaic incomplete notes.
---

This is an incomplete note of what I did to create a beautiful image of my girlfriend memories for her birthday.

1. Download Gimp
2. Download Image Magick
3. Plan your mosaic layout
   1. My final image was 3000px x 2550px
   2. I cropped and sized all my images to 150px x 150 px
   3. So we have a width/columns of 20 pictures by 150px = 3000 px
   4. And a height/rows of 17 pictures by 150px = 2550px
   5. Total image needed would be 20x17=340 pictures
4. Prepare photos with Image magick and create the image tile pattern
   1. 340 images to crop and position, doing so with image magick is easy with the following command. Create 1st a folder named cropped inside the folder where you have the 340 pictures.
   2. Crop everything with this command from terminal `mogrify -gravity center -crop 1:1 -path ./cropped *.jpg`
   3. Manually re-position the crop window to your liking since the command above is gravity centered and crop from the center.
   4. Resize all images to 150x 150 with this image magick command `mogrify -resize 150x150 -path ./resized *.jpg`
   5. Create the tiled mosaic pattern collection of 340 images with the following command:`montage *.jpg -tile 20x17 -geometry +0+0 pattern.jpg`
5. Use Gimp to overlay the tile mosaic pattern to the big image
   1. Choose the main image and scale it up or down to the size of your pattern, in this case 3000x2550px. Use Gimp image scale function to do that
   2. In Gimp add the main image, and the pattern image into Gimp as separate layers
   3. Select overlay or addition mode on the main image. Play with different settings to your liking, like the opacity.
