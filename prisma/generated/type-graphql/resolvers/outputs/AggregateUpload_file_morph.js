"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUpload_file_morph = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Upload_file_morphAvgAggregate_1 = require("../outputs/Upload_file_morphAvgAggregate");
const Upload_file_morphCountAggregate_1 = require("../outputs/Upload_file_morphCountAggregate");
const Upload_file_morphMaxAggregate_1 = require("../outputs/Upload_file_morphMaxAggregate");
const Upload_file_morphMinAggregate_1 = require("../outputs/Upload_file_morphMinAggregate");
const Upload_file_morphSumAggregate_1 = require("../outputs/Upload_file_morphSumAggregate");
let AggregateUpload_file_morph = class AggregateUpload_file_morph {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphCountAggregate_1.Upload_file_morphCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_file_morphCountAggregate_1.Upload_file_morphCountAggregate)
], AggregateUpload_file_morph.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphAvgAggregate_1.Upload_file_morphAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_file_morphAvgAggregate_1.Upload_file_morphAvgAggregate)
], AggregateUpload_file_morph.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphSumAggregate_1.Upload_file_morphSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_file_morphSumAggregate_1.Upload_file_morphSumAggregate)
], AggregateUpload_file_morph.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphMinAggregate_1.Upload_file_morphMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_file_morphMinAggregate_1.Upload_file_morphMinAggregate)
], AggregateUpload_file_morph.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Upload_file_morphMaxAggregate_1.Upload_file_morphMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Upload_file_morphMaxAggregate_1.Upload_file_morphMaxAggregate)
], AggregateUpload_file_morph.prototype, "_max", void 0);
AggregateUpload_file_morph = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateUpload_file_morph", {
        isAbstract: true
    })
], AggregateUpload_file_morph);
exports.AggregateUpload_file_morph = AggregateUpload_file_morph;
