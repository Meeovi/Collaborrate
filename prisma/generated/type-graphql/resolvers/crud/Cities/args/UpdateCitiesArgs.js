"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCitiesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CitiesUpdateInput_1 = require("../../../inputs/CitiesUpdateInput");
const CitiesWhereUniqueInput_1 = require("../../../inputs/CitiesWhereUniqueInput");
let UpdateCitiesArgs = class UpdateCitiesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesUpdateInput_1.CitiesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CitiesUpdateInput_1.CitiesUpdateInput)
], UpdateCitiesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesWhereUniqueInput_1.CitiesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CitiesWhereUniqueInput_1.CitiesWhereUniqueInput)
], UpdateCitiesArgs.prototype, "where", void 0);
UpdateCitiesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateCitiesArgs);
exports.UpdateCitiesArgs = UpdateCitiesArgs;
