"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueEndofshiftArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EndofshiftWhereUniqueInput_1 = require("../../../inputs/EndofshiftWhereUniqueInput");
let FindUniqueEndofshiftArgs = class FindUniqueEndofshiftArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EndofshiftWhereUniqueInput_1.EndofshiftWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EndofshiftWhereUniqueInput_1.EndofshiftWhereUniqueInput)
], FindUniqueEndofshiftArgs.prototype, "where", void 0);
FindUniqueEndofshiftArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueEndofshiftArgs);
exports.FindUniqueEndofshiftArgs = FindUniqueEndofshiftArgs;
