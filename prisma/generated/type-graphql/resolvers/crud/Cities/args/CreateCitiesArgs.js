"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCitiesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CitiesCreateInput_1 = require("../../../inputs/CitiesCreateInput");
let CreateCitiesArgs = class CreateCitiesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesCreateInput_1.CitiesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CitiesCreateInput_1.CitiesCreateInput)
], CreateCitiesArgs.prototype, "data", void 0);
CreateCitiesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateCitiesArgs);
exports.CreateCitiesArgs = CreateCitiesArgs;
