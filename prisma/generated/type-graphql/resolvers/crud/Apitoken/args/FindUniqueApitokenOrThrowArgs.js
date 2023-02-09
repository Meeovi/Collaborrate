"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueApitokenOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ApitokenWhereUniqueInput_1 = require("../../../inputs/ApitokenWhereUniqueInput");
let FindUniqueApitokenOrThrowArgs = class FindUniqueApitokenOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenWhereUniqueInput_1.ApitokenWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ApitokenWhereUniqueInput_1.ApitokenWhereUniqueInput)
], FindUniqueApitokenOrThrowArgs.prototype, "where", void 0);
FindUniqueApitokenOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueApitokenOrThrowArgs);
exports.FindUniqueApitokenOrThrowArgs = FindUniqueApitokenOrThrowArgs;
