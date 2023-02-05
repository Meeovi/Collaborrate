"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCitiesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CitiesCreateInput_1 = require("../../../inputs/CitiesCreateInput");
let CreateOneCitiesArgs = class CreateOneCitiesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesCreateInput_1.CitiesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CitiesCreateInput_1.CitiesCreateInput)
], CreateOneCitiesArgs.prototype, "data", void 0);
CreateOneCitiesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCitiesArgs);
exports.CreateOneCitiesArgs = CreateOneCitiesArgs;
