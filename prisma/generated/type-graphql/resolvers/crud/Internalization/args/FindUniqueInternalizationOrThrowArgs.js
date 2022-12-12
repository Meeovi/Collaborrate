"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueInternalizationOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InternalizationWhereUniqueInput_1 = require("../../../inputs/InternalizationWhereUniqueInput");
let FindUniqueInternalizationOrThrowArgs = class FindUniqueInternalizationOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationWhereUniqueInput_1.InternalizationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InternalizationWhereUniqueInput_1.InternalizationWhereUniqueInput)
], FindUniqueInternalizationOrThrowArgs.prototype, "where", void 0);
FindUniqueInternalizationOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueInternalizationOrThrowArgs);
exports.FindUniqueInternalizationOrThrowArgs = FindUniqueInternalizationOrThrowArgs;
