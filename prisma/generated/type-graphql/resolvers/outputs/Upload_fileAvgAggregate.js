"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload_fileAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const client_1 = require("@prisma/client");
const scalars_1 = require("../../scalars");
let Upload_fileAvgAggregate = class Upload_fileAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_fileAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_fileAvgAggregate.prototype, "width", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_fileAvgAggregate.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => scalars_1.DecimalJSScalar, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", client_1.Prisma.Decimal)
], Upload_fileAvgAggregate.prototype, "size", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_fileAvgAggregate.prototype, "created_by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Upload_fileAvgAggregate.prototype, "updated_by", void 0);
Upload_fileAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Upload_fileAvgAggregate", {
        isAbstract: true
    })
], Upload_fileAvgAggregate);
exports.Upload_fileAvgAggregate = Upload_fileAvgAggregate;
