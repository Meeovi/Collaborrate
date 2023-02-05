"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneFullfillmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FullfillmentsCreateInput_1 = require("../../../inputs/FullfillmentsCreateInput");
const FullfillmentsUpdateInput_1 = require("../../../inputs/FullfillmentsUpdateInput");
const FullfillmentsWhereUniqueInput_1 = require("../../../inputs/FullfillmentsWhereUniqueInput");
let UpsertOneFullfillmentsArgs = class UpsertOneFullfillmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsWhereUniqueInput_1.FullfillmentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FullfillmentsWhereUniqueInput_1.FullfillmentsWhereUniqueInput)
], UpsertOneFullfillmentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsCreateInput_1.FullfillmentsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FullfillmentsCreateInput_1.FullfillmentsCreateInput)
], UpsertOneFullfillmentsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsUpdateInput_1.FullfillmentsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FullfillmentsUpdateInput_1.FullfillmentsUpdateInput)
], UpsertOneFullfillmentsArgs.prototype, "update", void 0);
UpsertOneFullfillmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneFullfillmentsArgs);
exports.UpsertOneFullfillmentsArgs = UpsertOneFullfillmentsArgs;
