### Changelog

### Version 0.2 - 09-24-2026

### Added

* **Properties/New:** Added support for the following troybin properties: teamcolor-correction, p-type=11, submesh-list
* **Properties/ColorTexture:** A default color texture will be added to an emitter if no other color texture is set
* **UI/Convert:** Added option to split keywords used in troybin into their own VfxSystemDefinitionData entries
* **UI/Misc:** Added Changelog


### Changed

* **Properties/SimpleEmitter:** Simple emitters are now being converted to complex emitters
* **Properties/Disabled:** Emitters with 'disabled' property will be removed during migration
* **Properties/General:** Updated bin properties to the current League of Legends version
* **Properties/General:** Properties referencing '.dds' files will be changed to '.tex' during migration
* **Properties/Hashes:** Update bin hashes
* **UI/Convert:** Reworked convert workflow and modal
* **UI/Filelist:** Reworked layout and filters
* **UI/Preview:** Reworked layout
* **UI/Theme:** Removed lightmode (at least for now)

### Fixed

* **Properties/Primitive:** Fixed a bug where the primitive entry could be writen multiple times
* **Properties/General:** Fixed a bug where numbers could be rounded too much (This was especially noticable with colors)
* **UI/Upload:** Fixed a bug where files could not be uploaded per drag&drop if exactly 20 files were previously uploaded (idk either...)


### Version 0.1 - Before 09-24-2026

* (No changelog for patches before version 0.2)