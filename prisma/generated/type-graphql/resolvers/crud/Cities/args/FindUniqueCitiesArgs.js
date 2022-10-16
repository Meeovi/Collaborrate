"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCitiesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CitiesWhereUniqueInput_1 = require("../../../inputs/CitiesWhereUniqueInput");
let FindUniqueCitiesArgs = class FindUniqueCitiesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesWhereUniqueInput_1.CitiesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CitiesWhereUniqueInput_1.CitiesWhereUniqueInput)
], FindUniqueCitiesArgs.prototype, "where", void 0);
FindUniqueCitiesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCitiesArgs);
exports.FindUniqueCitiesArgs = FindUniqueCitiesArgs;
