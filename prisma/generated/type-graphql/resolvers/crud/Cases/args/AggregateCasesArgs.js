"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCasesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CasesOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/CasesOrderByWithRelationAndSearchRelevanceInput");
const CasesWhereInput_1 = require("../../../inputs/CasesWhereInput");
const CasesWhereUniqueInput_1 = require("../../../inputs/CasesWhereUniqueInput");
let AggregateCasesArgs = class AggregateCasesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesWhereInput_1.CasesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CasesWhereInput_1.CasesWhereInput)
], AggregateCasesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CasesOrderByWithRelationAndSearchRelevanceInput_1.CasesOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateCasesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CasesWhereUniqueInput_1.CasesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CasesWhereUniqueInput_1.CasesWhereUniqueInput)
], AggregateCasesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCasesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCasesArgs.prototype, "skip", void 0);
AggregateCasesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateCasesArgs);
exports.AggregateCasesArgs = AggregateCasesArgs;
