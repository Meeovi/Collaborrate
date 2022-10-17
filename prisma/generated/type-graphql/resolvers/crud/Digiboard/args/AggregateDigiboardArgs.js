"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDigiboardArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DigiboardOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/DigiboardOrderByWithRelationAndSearchRelevanceInput");
const DigiboardWhereInput_1 = require("../../../inputs/DigiboardWhereInput");
const DigiboardWhereUniqueInput_1 = require("../../../inputs/DigiboardWhereUniqueInput");
let AggregateDigiboardArgs = class AggregateDigiboardArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardWhereInput_1.DigiboardWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardWhereInput_1.DigiboardWhereInput)
], AggregateDigiboardArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DigiboardOrderByWithRelationAndSearchRelevanceInput_1.DigiboardOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateDigiboardArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardWhereUniqueInput_1.DigiboardWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardWhereUniqueInput_1.DigiboardWhereUniqueInput)
], AggregateDigiboardArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateDigiboardArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateDigiboardArgs.prototype, "skip", void 0);
AggregateDigiboardArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateDigiboardArgs);
exports.AggregateDigiboardArgs = AggregateDigiboardArgs;
