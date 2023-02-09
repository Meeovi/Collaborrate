"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUpload_file = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_fileAvgAggregate_1 = require("../outputs/Upload_fileAvgAggregate");
const Upload_fileCountAggregate_1 = require("../outputs/Upload_fileCountAggregate");
const Upload_fileMaxAggregate_1 = require("../outputs/Upload_fileMaxAggregate");
const Upload_fileMinAggregate_1 = require("../outputs/Upload_fileMinAggregate");
const Upload_fileSumAggregate_1 = require("../outputs/Upload_fileSumAggregate");
let AggregateUpload_file = class AggregateUpload_file {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileCountAggregate_1.Upload_fileCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileCountAggregate_1.Upload_fileCountAggregate)
], AggregateUpload_file.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileAvgAggregate_1.Upload_fileAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileAvgAggregate_1.Upload_fileAvgAggregate)
], AggregateUpload_file.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileSumAggregate_1.Upload_fileSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileSumAggregate_1.Upload_fileSumAggregate)
], AggregateUpload_file.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileMinAggregate_1.Upload_fileMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileMinAggregate_1.Upload_fileMinAggregate)
], AggregateUpload_file.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_fileMaxAggregate_1.Upload_fileMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_fileMaxAggregate_1.Upload_fileMaxAggregate)
], AggregateUpload_file.prototype, "_max", void 0);
AggregateUpload_file = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateUpload_file", {
        isAbstract: true
    })
], AggregateUpload_file);
exports.AggregateUpload_file = AggregateUpload_file;
