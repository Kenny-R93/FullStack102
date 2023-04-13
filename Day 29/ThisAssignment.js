// Create one object named `photoSlideShow`. This object will represent the functionality of a picture slideshow.
let photoSlideShow = {
    photoList: ["photo1.jpg","photo2.jpg","photo3.jpg","photo4.jpg"], // 1.An array called photoList that contains the names of the photos as strings
    currentPhotoIndex: 0,           // 2. An integer currentPhotoIndex that represents which photo in the photoList is currently displayed
    nextPhoto() {          // 3. A nextPhoto() function that moves currentPhotoIndex to the next index if there is one, and: 4. logs the current photo name. 4. Otherwise, log "End of slideshow";
        if (this.currentPhotoIndex < this.photoList.length - 1) {
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex]);
        } else {
            console.log("End of slideshow");
        }
    },
    prevPhoto() {          // 4. A prevPhoto() function that does the same thing, but backwards.
        if (this.currentPhotoIndex > 0){
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex]);
        } else {
            console.log("End of slideshow");
        }
    },
    getCurrentPhoto() {            // 5. A function getCurrentPhoto() that returns the current photo from the list.
        return this.photoList[this.currentPhotoIndex];
    }
};

console.log(photoSlideShow.getCurrentPhoto());
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.prevPhoto();
