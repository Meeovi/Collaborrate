"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_file_morphSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Upload_file_morphSumAggregate = class Upload_file_morphSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphSumAggregate.prototype, "upload_file_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphSumAggregate.prototype, "related_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_file_morphSumAggregate.prototype, "order", void 0);
Upload_file_morphSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Upload_file_morphSumAggregate", {
        isAbstract: true
    })
], Upload_file_morphSumAggregate);
exports.Upload_file_morphSumAggregate = Upload_file_morphSumAggregate;
