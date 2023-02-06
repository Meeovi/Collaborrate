"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCitiesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CitiesUpdateManyMutationInput_1 = require("../../../inputs/CitiesUpdateManyMutationInput");
const CitiesWhereInput_1 = require("../../../inputs/CitiesWhereInput");
let UpdateManyCitiesArgs = class UpdateManyCitiesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesUpdateManyMutationInput_1.CitiesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CitiesUpdateManyMutationInput_1.CitiesUpdateManyMutationInput)
], UpdateManyCitiesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CitiesWhereInput_1.CitiesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CitiesWhereInput_1.CitiesWhereInput)
], UpdateManyCitiesArgs.prototype, "where", void 0);
UpdateManyCitiesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCitiesArgs);
exports.UpdateManyCitiesArgs = UpdateManyCitiesArgs;
