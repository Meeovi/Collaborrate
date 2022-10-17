"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCouponsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/CouponsOrderByWithRelationAndSearchRelevanceInput");
const CouponsWhereInput_1 = require("../../../inputs/CouponsWhereInput");
const CouponsWhereUniqueInput_1 = require("../../../inputs/CouponsWhereUniqueInput");
let AggregateCouponsArgs = class AggregateCouponsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsWhereInput_1.CouponsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsWhereInput_1.CouponsWhereInput)
], AggregateCouponsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CouponsOrderByWithRelationAndSearchRelevanceInput_1.CouponsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateCouponsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsWhereUniqueInput_1.CouponsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsWhereUniqueInput_1.CouponsWhereUniqueInput)
], AggregateCouponsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCouponsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCouponsArgs.prototype, "skip", void 0);
AggregateCouponsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateCouponsArgs);
exports.AggregateCouponsArgs = AggregateCouponsArgs;
