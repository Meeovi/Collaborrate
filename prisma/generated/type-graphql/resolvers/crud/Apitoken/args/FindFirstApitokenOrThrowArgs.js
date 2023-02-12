"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstApitokenOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ApitokenOrderByWithRelationInput_1 = require("../../../inputs/ApitokenOrderByWithRelationInput");
const ApitokenWhereInput_1 = require("../../../inputs/ApitokenWhereInput");
const ApitokenWhereUniqueInput_1 = require("../../../inputs/ApitokenWhereUniqueInput");
const ApitokenScalarFieldEnum_1 = require("../../../../enums/ApitokenScalarFieldEnum");
let FindFirstApitokenOrThrowArgs = class FindFirstApitokenOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenWhereInput_1.ApitokenWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ApitokenWhereInput_1.ApitokenWhereInput)
], FindFirstApitokenOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ApitokenOrderByWithRelationInput_1.ApitokenOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstApitokenOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenWhereUniqueInput_1.ApitokenWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ApitokenWhereUniqueInput_1.ApitokenWhereUniqueInput)
], FindFirstApitokenOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstApitokenOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstApitokenOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ApitokenScalarFieldEnum_1.ApitokenScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstApitokenOrThrowArgs.prototype, "distinct", void 0);
FindFirstApitokenOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstApitokenOrThrowArgs);
exports.FindFirstApitokenOrThrowArgs = FindFirstApitokenOrThrowArgs;
