import{_ as e,c as t,o as r,a}from"./app.ce5166e3.js";const u='{"title":"Processors","description":"","frontmatter":{},"headers":[{"level":2,"title":"DocBlockDescriptions","slug":"docblockdescriptions"},{"level":2,"title":"MergeIntoOpenApi","slug":"mergeintoopenapi"},{"level":2,"title":"MergeIntoComponents","slug":"mergeintocomponents"},{"level":2,"title":"ExpandClasses","slug":"expandclasses"},{"level":2,"title":"ExpandInterfaces","slug":"expandinterfaces"},{"level":2,"title":"ExpandTraits","slug":"expandtraits"},{"level":2,"title":"ExpandEnums","slug":"expandenums"},{"level":2,"title":"AugmentSchemas","slug":"augmentschemas"},{"level":2,"title":"AugmentProperties","slug":"augmentproperties"},{"level":2,"title":"BuildPaths","slug":"buildpaths"},{"level":2,"title":"AugmentParameters","slug":"augmentparameters"},{"level":3,"title":"Config settings","slug":"config-settings"},{"level":2,"title":"AugmentRefs","slug":"augmentrefs"},{"level":2,"title":"MergeJsonContent","slug":"mergejsoncontent"},{"level":2,"title":"MergeXmlContent","slug":"mergexmlcontent"},{"level":2,"title":"OperationId","slug":"operationid"},{"level":3,"title":"Config settings","slug":"config-settings-1"},{"level":2,"title":"CleanUnmerged","slug":"cleanunmerged"},{"level":2,"title":"CleanUnusedComponents","slug":"cleanunusedcomponents"}],"relativePath":"reference/processors.md"}',n={},s=a('<h1 id="processors" tabindex="-1">Processors <a class="header-anchor" href="#processors" aria-hidden="true">#</a></h1><p>This page is generated automatically from the <code>swagger-php</code> sources.</p><p>For improvements head over to <a href="https://github.com/zircote/swagger-php" target="_blank" rel="noopener noreferrer">GitHub</a> and create a PR \u{1F609}</p><h2 id="docblockdescriptions" tabindex="-1"><a href="https://github.com/zircote/swagger-php/tree/master/src/Processors/DocBlockDescriptions.php" target="_blank" rel="noopener noreferrer">DocBlockDescriptions</a> <a class="header-anchor" href="#docblockdescriptions" aria-hidden="true">#</a></h2><p>Checks if the annotation has a summary and/or description property and uses the text in the comment block (above the annotations) as summary and/or description.</p><p>Use <code>null</code>, for example: <code>@Annotation(description=null)</code>, if you don&#39;t want the annotation to have a description.</p><h2 id="mergeintoopenapi" tabindex="-1"><a href="https://github.com/zircote/swagger-php/tree/master/src/Processors/MergeIntoOpenApi.php" target="_blank" rel="noopener noreferrer">MergeIntoOpenApi</a> <a class="header-anchor" href="#mergeintoopenapi" aria-hidden="true">#</a></h2><p>Merge all @OA\\OpenApi annotations into one.</p><h2 id="mergeintocomponents" tabindex="-1"><a href="https://github.com/zircote/swagger-php/tree/master/src/Processors/MergeIntoComponents.php" target="_blank" rel="noopener noreferrer">MergeIntoComponents</a> <a class="header-anchor" href="#mergeintocomponents" aria-hidden="true">#</a></h2><p>Merge reusable annotation into @OA\\Schemas.</p><h2 id="expandclasses" tabindex="-1"><a href="https://github.com/zircote/swagger-php/tree/master/src/Processors/ExpandClasses.php" target="_blank" rel="noopener noreferrer">ExpandClasses</a> <a class="header-anchor" href="#expandclasses" aria-hidden="true">#</a></h2><p>Iterate over the chain of ancestors of a schema and:</p><ul><li>if the ancestor has a schema =&gt; inherit from the ancestor if it has a schema (allOf) and stop.</li><li>else =&gt; merge ancestor properties into the schema.</li></ul><h2 id="expandinterfaces" tabindex="-1"><a href="https://github.com/zircote/swagger-php/tree/master/src/Processors/ExpandInterfaces.php" target="_blank" rel="noopener noreferrer">ExpandInterfaces</a> <a class="header-anchor" href="#expandinterfaces" aria-hidden="true">#</a></h2><p>Look at all (direct) interfaces for a schema and:</p><ul><li>merge interfaces annotations/methods into the schema if the interface does not have a schema itself</li><li>inherit from the interface if it has a schema (allOf).</li></ul><h2 id="expandtraits" tabindex="-1"><a href="https://github.com/zircote/swagger-php/tree/master/src/Processors/ExpandTraits.php" target="_blank" rel="noopener noreferrer">ExpandTraits</a> <a class="header-anchor" href="#expandtraits" aria-hidden="true">#</a></h2><p>Look at all (direct) traits for a schema and:</p><ul><li>merge trait annotations/methods/properties into the schema if the trait does not have a schema itself</li><li>inherit from the trait if it has a schema (allOf).</li></ul><h2 id="expandenums" tabindex="-1"><a href="https://github.com/zircote/swagger-php/tree/master/src/Processors/ExpandEnums.php" target="_blank" rel="noopener noreferrer">ExpandEnums</a> <a class="header-anchor" href="#expandenums" aria-hidden="true">#</a></h2><p>Expands PHP enums.</p><p>Determines <code>schema</code>, <code>enum</code> and <code>type</code>.</p><h2 id="augmentschemas" tabindex="-1"><a href="https://github.com/zircote/swagger-php/tree/master/src/Processors/AugmentSchemas.php" target="_blank" rel="noopener noreferrer">AugmentSchemas</a> <a class="header-anchor" href="#augmentschemas" aria-hidden="true">#</a></h2><p>Use the Schema context to extract useful information and inject that into the annotation.</p><p>Merges properties.</p><h2 id="augmentproperties" tabindex="-1"><a href="https://github.com/zircote/swagger-php/tree/master/src/Processors/AugmentProperties.php" target="_blank" rel="noopener noreferrer">AugmentProperties</a> <a class="header-anchor" href="#augmentproperties" aria-hidden="true">#</a></h2><p>Use the property context to extract useful information and inject that into the annotation.</p><h2 id="buildpaths" tabindex="-1"><a href="https://github.com/zircote/swagger-php/tree/master/src/Processors/BuildPaths.php" target="_blank" rel="noopener noreferrer">BuildPaths</a> <a class="header-anchor" href="#buildpaths" aria-hidden="true">#</a></h2><p>Build the openapi-&gt;paths using the detected <code>@OA\\PathItem</code> and <code>@OA\\Operation</code> (<code>@OA\\Get</code>, <code>@OA\\Post</code>, etc).</p><h2 id="augmentparameters" tabindex="-1"><a href="https://github.com/zircote/swagger-php/tree/master/src/Processors/AugmentParameters.php" target="_blank" rel="noopener noreferrer">AugmentParameters</a> <a class="header-anchor" href="#augmentparameters" aria-hidden="true">#</a></h2><h3 id="config-settings" tabindex="-1">Config settings <a class="header-anchor" href="#config-settings" aria-hidden="true">#</a></h3><dl><dt><strong>augmentParameters.augmentOperationParameters</strong> : <span style="font-family:monospace;">bool</span></dt><dd><p>If set to <code>true</code> try to find operation parameter descriptions in the operation docblock.</p></dd></dl><h2 id="augmentrefs" tabindex="-1"><a href="https://github.com/zircote/swagger-php/tree/master/src/Processors/AugmentRefs.php" target="_blank" rel="noopener noreferrer">AugmentRefs</a> <a class="header-anchor" href="#augmentrefs" aria-hidden="true">#</a></h2><h2 id="mergejsoncontent" tabindex="-1"><a href="https://github.com/zircote/swagger-php/tree/master/src/Processors/MergeJsonContent.php" target="_blank" rel="noopener noreferrer">MergeJsonContent</a> <a class="header-anchor" href="#mergejsoncontent" aria-hidden="true">#</a></h2><p>Split JsonContent into Schema and MediaType.</p><h2 id="mergexmlcontent" tabindex="-1"><a href="https://github.com/zircote/swagger-php/tree/master/src/Processors/MergeXmlContent.php" target="_blank" rel="noopener noreferrer">MergeXmlContent</a> <a class="header-anchor" href="#mergexmlcontent" aria-hidden="true">#</a></h2><p>Split XmlContent into Schema and MediaType.</p><h2 id="operationid" tabindex="-1"><a href="https://github.com/zircote/swagger-php/tree/master/src/Processors/OperationId.php" target="_blank" rel="noopener noreferrer">OperationId</a> <a class="header-anchor" href="#operationid" aria-hidden="true">#</a></h2><p>Generate the OperationId based on the context of the OpenApi annotation.</p><h3 id="config-settings-1" tabindex="-1">Config settings <a class="header-anchor" href="#config-settings-1" aria-hidden="true">#</a></h3><dl><dt><strong>operationId.hash</strong> : <span style="font-family:monospace;">bool</span></dt><dd><p>If set to <code>true</code> generate ids (md5) instead of clear text operation ids.</p></dd></dl><h2 id="cleanunmerged" tabindex="-1"><a href="https://github.com/zircote/swagger-php/tree/master/src/Processors/CleanUnmerged.php" target="_blank" rel="noopener noreferrer">CleanUnmerged</a> <a class="header-anchor" href="#cleanunmerged" aria-hidden="true">#</a></h2><h2 id="cleanunusedcomponents" tabindex="-1"><a href="https://github.com/zircote/swagger-php/tree/master/src/Processors/CleanUnusedComponents.php" target="_blank" rel="noopener noreferrer">CleanUnusedComponents</a> <a class="header-anchor" href="#cleanunusedcomponents" aria-hidden="true">#</a></h2>',43),o=[s];function i(h,p,c,d,l,g){return r(),t("div",null,o)}var f=e(n,[["render",i]]);export{u as __pageData,f as default};
