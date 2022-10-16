"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCitiesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CitiesUpdateInput_1 = require("../../../inputs/CitiesUpdateInput");
const CitiesWhereUniqueInput_1 = require("../../../inputs/CitiesWhereUniqueInput");
let UpdateOneCitiesArgs = class UpdateOneCitiesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesUpdateInput_1.CitiesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CitiesUpdateInput_1.CitiesUpdateInput)
], UpdateOneCitiesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesWhereUniqueInput_1.CitiesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CitiesWhereUniqueInput_1.CitiesWhereUniqueInput)
], UpdateOneCitiesArgs.prototype, "where", void 0);
UpdateOneCitiesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCitiesArgs);
exports.UpdateOneCitiesArgs = UpdateOneCitiesArgs;
