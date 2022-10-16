"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCustomizationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomizationsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/CustomizationsOrderByWithRelationAndSearchRelevanceInput");
const CustomizationsWhereInput_1 = require("../../../inputs/CustomizationsWhereInput");
const CustomizationsWhereUniqueInput_1 = require("../../../inputs/CustomizationsWhereUniqueInput");
let AggregateCustomizationsArgs = class AggregateCustomizationsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsWhereInput_1.CustomizationsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomizationsWhereInput_1.CustomizationsWhereInput)
], AggregateCustomizationsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomizationsOrderByWithRelationAndSearchRelevanceInput_1.CustomizationsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateCustomizationsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomizationsWhereUniqueInput_1.CustomizationsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomizationsWhereUniqueInput_1.CustomizationsWhereUniqueInput)
], AggregateCustomizationsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCustomizationsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCustomizationsArgs.prototype, "skip", void 0);
AggregateCustomizationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateCustomizationsArgs);
exports.AggregateCustomizationsArgs = AggregateCustomizationsArgs;
