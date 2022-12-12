"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEndofshiftOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EndofshiftWhereUniqueInput_1 = require("../../../inputs/EndofshiftWhereUniqueInput");
let FindUniqueEndofshiftOrThrowArgs = class FindUniqueEndofshiftOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftWhereUniqueInput_1.EndofshiftWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EndofshiftWhereUniqueInput_1.EndofshiftWhereUniqueInput)
], FindUniqueEndofshiftOrThrowArgs.prototype, "where", void 0);
FindUniqueEndofshiftOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueEndofshiftOrThrowArgs);
exports.FindUniqueEndofshiftOrThrowArgs = FindUniqueEndofshiftOrThrowArgs;
