"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDeepdiveArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeepdiveWhereUniqueInput_1 = require("../../../inputs/DeepdiveWhereUniqueInput");
let FindUniqueDeepdiveArgs = class FindUniqueDeepdiveArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DeepdiveWhereUniqueInput_1.DeepdiveWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", DeepdiveWhereUniqueInput_1.DeepdiveWhereUniqueInput)
], FindUniqueDeepdiveArgs.prototype, "where", void 0);
FindUniqueDeepdiveArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueDeepdiveArgs);
exports.FindUniqueDeepdiveArgs = FindUniqueDeepdiveArgs;
