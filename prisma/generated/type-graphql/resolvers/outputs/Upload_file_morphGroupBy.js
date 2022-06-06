"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_file_morphGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_file_morphAvgAggregate_1 = require("../outputs/Upload_file_morphAvgAggregate");
const Upload_file_morphCountAggregate_1 = require("../outputs/Upload_file_morphCountAggregate");
const Upload_file_morphMaxAggregate_1 = require("../outputs/Upload_file_morphMaxAggregate");
const Upload_file_morphMinAggregate_1 = require("../outputs/Upload_file_morphMinAggregate");
const Upload_file_morphSumAggregate_1 = require("../outputs/Upload_file_morphSumAggregate");
let Upload_file_morphGroupBy = class Upload_file_morphGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphGroupBy.prototype, "upload_file_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphGroupBy.prototype, "related_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphGroupBy.prototype, "related_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphGroupBy.prototype, "field", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphGroupBy.prototype, "order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphCountAggregate_1.Upload_file_morphCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_file_morphCountAggregate_1.Upload_file_morphCountAggregate)
], Upload_file_morphGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphAvgAggregate_1.Upload_file_morphAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_file_morphAvgAggregate_1.Upload_file_morphAvgAggregate)
], Upload_file_morphGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphSumAggregate_1.Upload_file_morphSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_file_morphSumAggregate_1.Upload_file_morphSumAggregate)
], Upload_file_morphGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphMinAggregate_1.Upload_file_morphMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_file_morphMinAggregate_1.Upload_file_morphMinAggregate)
], Upload_file_morphGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphMaxAggregate_1.Upload_file_morphMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_file_morphMaxAggregate_1.Upload_file_morphMaxAggregate)
], Upload_file_morphGroupBy.prototype, "_max", void 0);
Upload_file_morphGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Upload_file_morphGroupBy", {
        isAbstract: true
    })
], Upload_file_morphGroupBy);
exports.Upload_file_morphGroupBy = Upload_file_morphGroupBy;
