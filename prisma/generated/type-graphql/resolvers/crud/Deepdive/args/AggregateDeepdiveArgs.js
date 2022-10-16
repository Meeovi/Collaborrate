"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDeepdiveArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeepdiveOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/DeepdiveOrderByWithRelationAndSearchRelevanceInput");
const DeepdiveWhereInput_1 = require("../../../inputs/DeepdiveWhereInput");
const DeepdiveWhereUniqueInput_1 = require("../../../inputs/DeepdiveWhereUniqueInput");
let AggregateDeepdiveArgs = class AggregateDeepdiveArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveWhereInput_1.DeepdiveWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DeepdiveWhereInput_1.DeepdiveWhereInput)
], AggregateDeepdiveArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DeepdiveOrderByWithRelationAndSearchRelevanceInput_1.DeepdiveOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateDeepdiveArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveWhereUniqueInput_1.DeepdiveWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DeepdiveWhereUniqueInput_1.DeepdiveWhereUniqueInput)
], AggregateDeepdiveArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateDeepdiveArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateDeepdiveArgs.prototype, "skip", void 0);
AggregateDeepdiveArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateDeepdiveArgs);
exports.AggregateDeepdiveArgs = AggregateDeepdiveArgs;
