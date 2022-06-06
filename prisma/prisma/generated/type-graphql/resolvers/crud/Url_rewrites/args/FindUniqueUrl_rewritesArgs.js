"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueUrl_rewritesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Url_rewritesWhereUniqueInput_1 = require("../../../inputs/Url_rewritesWhereUniqueInput");
let FindUniqueUrl_rewritesArgs = class FindUniqueUrl_rewritesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Url_rewritesWhereUniqueInput_1.Url_rewritesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Url_rewritesWhereUniqueInput_1.Url_rewritesWhereUniqueInput)
], FindUniqueUrl_rewritesArgs.prototype, "where", void 0);
FindUniqueUrl_rewritesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueUrl_rewritesArgs);
exports.FindUniqueUrl_rewritesArgs = FindUniqueUrl_rewritesArgs;
