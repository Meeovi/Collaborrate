"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_fileGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
const Upload_fileAvgAggregate_1 = require("../outputs/Upload_fileAvgAggregate");
const Upload_fileCountAggregate_1 = require("../outputs/Upload_fileCountAggregate");
const Upload_fileMaxAggregate_1 = require("../outputs/Upload_fileMaxAggregate");
const Upload_fileMinAggregate_1 = require("../outputs/Upload_fileMinAggregate");
const Upload_fileSumAggregate_1 = require("../outputs/Upload_fileSumAggregate");
let Upload_fileGroupBy = class Upload_fileGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_fileGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileGroupBy.prototype, "alternativeText", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileGroupBy.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_fileGroupBy.prototype, "width", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_fileGroupBy.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], Upload_fileGroupBy.prototype, "formats", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileGroupBy.prototype, "hash", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileGroupBy.prototype, "ext", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileGroupBy.prototype, "mime", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Upload_fileGroupBy.prototype, "size", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileGroupBy.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileGroupBy.prototype, "previewUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Upload_fileGroupBy.prototype, "provider", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], Upload_fileGroupBy.prototype, "provider_metadata", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_fileGroupBy.prototype, "created_by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_fileGroupBy.prototype, "updated_by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Upload_fileGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Upload_fileGroupBy.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileCountAggregate_1.Upload_fileCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileCountAggregate_1.Upload_fileCountAggregate)
], Upload_fileGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileAvgAggregate_1.Upload_fileAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileAvgAggregate_1.Upload_fileAvgAggregate)
], Upload_fileGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileSumAggregate_1.Upload_fileSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileSumAggregate_1.Upload_fileSumAggregate)
], Upload_fileGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileMinAggregate_1.Upload_fileMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileMinAggregate_1.Upload_fileMinAggregate)
], Upload_fileGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileMaxAggregate_1.Upload_fileMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileMaxAggregate_1.Upload_fileMaxAggregate)
], Upload_fileGroupBy.prototype, "_max", void 0);
Upload_fileGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Upload_fileGroupBy", {
        isAbstract: true
    })
], Upload_fileGroupBy);
exports.Upload_fileGroupBy = Upload_fileGroupBy;
