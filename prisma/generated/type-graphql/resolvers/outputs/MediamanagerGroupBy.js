"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediamanagerGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MediamanagerAvgAggregate_1 = require("../outputs/MediamanagerAvgAggregate");
const MediamanagerCountAggregate_1 = require("../outputs/MediamanagerCountAggregate");
const MediamanagerMaxAggregate_1 = require("../outputs/MediamanagerMaxAggregate");
const MediamanagerMinAggregate_1 = require("../outputs/MediamanagerMinAggregate");
const MediamanagerSumAggregate_1 = require("../outputs/MediamanagerSumAggregate");
let MediamanagerGroupBy = class MediamanagerGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], MediamanagerGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MediamanagerGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "keywords", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "tags", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "brands", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "expiration_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "copyright", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "dimensions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "content_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "versions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "watermark_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "watermark_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "watermark_media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "agreements", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "albums", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "comment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "workspace", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "task_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "task_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "task_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "members", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "agreements_agreementsTomediamanager", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "brands_brandsTomediamanager", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "products_mediamanagerToproducts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "tasks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MediamanagerGroupBy.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerCountAggregate_1.MediamanagerCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MediamanagerCountAggregate_1.MediamanagerCountAggregate)
], MediamanagerGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerAvgAggregate_1.MediamanagerAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MediamanagerAvgAggregate_1.MediamanagerAvgAggregate)
], MediamanagerGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerSumAggregate_1.MediamanagerSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MediamanagerSumAggregate_1.MediamanagerSumAggregate)
], MediamanagerGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerMinAggregate_1.MediamanagerMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MediamanagerMinAggregate_1.MediamanagerMinAggregate)
], MediamanagerGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MediamanagerMaxAggregate_1.MediamanagerMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MediamanagerMaxAggregate_1.MediamanagerMaxAggregate)
], MediamanagerGroupBy.prototype, "_max", void 0);
MediamanagerGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MediamanagerGroupBy", {
        isAbstract: true
    })
], MediamanagerGroupBy);
exports.MediamanagerGroupBy = MediamanagerGroupBy;
