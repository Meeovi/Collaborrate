"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_file_morphCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Upload_file_morphCreateManyInput = class Upload_file_morphCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphCreateManyInput.prototype, "upload_file_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphCreateManyInput.prototype, "related_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphCreateManyInput.prototype, "related_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Upload_file_morphCreateManyInput.prototype, "field", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphCreateManyInput.prototype, "order", void 0);
Upload_file_morphCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Upload_file_morphCreateManyInput", {
        isAbstract: true
    })
], Upload_file_morphCreateManyInput);
exports.Upload_file_morphCreateManyInput = Upload_file_morphCreateManyInput;
