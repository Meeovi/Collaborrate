"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_file_morphOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Upload_file_morphOrderByWithRelationInput = class Upload_file_morphOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphOrderByWithRelationInput.prototype, "upload_file_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphOrderByWithRelationInput.prototype, "related_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphOrderByWithRelationInput.prototype, "related_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphOrderByWithRelationInput.prototype, "field", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphOrderByWithRelationInput.prototype, "order", void 0);
Upload_file_morphOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Upload_file_morphOrderByWithRelationInput", {
        isAbstract: true
    })
], Upload_file_morphOrderByWithRelationInput);
exports.Upload_file_morphOrderByWithRelationInput = Upload_file_morphOrderByWithRelationInput;
