"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueFullfillmentsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FullfillmentsWhereUniqueInput_1 = require("../../../inputs/FullfillmentsWhereUniqueInput");
let FindUniqueFullfillmentsOrThrowArgs = class FindUniqueFullfillmentsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FullfillmentsWhereUniqueInput_1.FullfillmentsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FullfillmentsWhereUniqueInput_1.FullfillmentsWhereUniqueInput)
], FindUniqueFullfillmentsOrThrowArgs.prototype, "where", void 0);
FindUniqueFullfillmentsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueFullfillmentsOrThrowArgs);
exports.FindUniqueFullfillmentsOrThrowArgs = FindUniqueFullfillmentsOrThrowArgs;
