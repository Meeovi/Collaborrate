"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstApitokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ApitokenOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/ApitokenOrderByWithRelationAndSearchRelevanceInput");
const ApitokenWhereInput_1 = require("../../../inputs/ApitokenWhereInput");
const ApitokenWhereUniqueInput_1 = require("../../../inputs/ApitokenWhereUniqueInput");
const ApitokenScalarFieldEnum_1 = require("../../../../enums/ApitokenScalarFieldEnum");
let FindFirstApitokenArgs = class FindFirstApitokenArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenWhereInput_1.ApitokenWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ApitokenWhereInput_1.ApitokenWhereInput)
], FindFirstApitokenArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ApitokenOrderByWithRelationAndSearchRelevanceInput_1.ApitokenOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstApitokenArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenWhereUniqueInput_1.ApitokenWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ApitokenWhereUniqueInput_1.ApitokenWhereUniqueInput)
], FindFirstApitokenArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstApitokenArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstApitokenArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ApitokenScalarFieldEnum_1.ApitokenScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstApitokenArgs.prototype, "distinct", void 0);
FindFirstApitokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstApitokenArgs);
exports.FindFirstApitokenArgs = FindFirstApitokenArgs;
