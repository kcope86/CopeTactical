import { Build, builds } from "./builds";

function getGalleryImagePath(buildId: string, imageNumber: number): string {
  const paddedNumber = imageNumber.toString().padStart(2, "0");
  return `/images/builds/${buildId}/gallery-${paddedNumber}.jpg`;
}

export function getAllBuilds(): Build[] {
  return builds;
}

export function getFeaturedBuilds(): Build[] {
  return builds.filter((build) => build.featured);
}

export function getAvailableBuilds(): Build[] {
  return builds.filter((build) => build.available);
}

export function getBuildById(id: string): Build | undefined {
  return builds.find((build) => build.id === id);
}

export function getBuildGalleryImages(build: Build): string[] {
  return Array.from({ length: build.galleryCount }, (_, index) =>
    getGalleryImagePath(build.id, index + 1)
  );
}