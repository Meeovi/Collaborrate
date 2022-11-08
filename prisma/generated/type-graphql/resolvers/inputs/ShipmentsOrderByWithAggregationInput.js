"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShipmentsAvgOrderByAggregateInput_1 = require("../inputs/ShipmentsAvgOrderByAggregateInput");
const ShipmentsCountOrderByAggregateInput_1 = require("../inputs/ShipmentsCountOrderByAggregateInput");
const ShipmentsMaxOrderByAggregateInput_1 = require("../inputs/ShipmentsMaxOrderByAggregateInput");
const ShipmentsMinOrderByAggregateInput_1 = require("../inputs/ShipmentsMinOrderByAggregateInput");
const ShipmentsSumOrderByAggregateInput_1 = require("../inputs/ShipmentsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ShipmentsOrderByWithAggregationInput = class ShipmentsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsOrderByWithAggregationInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsOrderByWithAggregationInput.prototype, "speed_grade", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsOrderByWithAggregationInput.prototype, "ship_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsOrderByWithAggregationInput.prototype, "carrier_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsOrderByWithAggregationInput.prototype, "transit_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsOrderByWithAggregationInput.prototype, "tracking_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsOrderByWithAggregationInput.prototype, "client_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsOrderByWithAggregationInput.prototype, "client_secret", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ShipmentsOrderByWithAggregationInput.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsCountOrderByAggregateInput_1.ShipmentsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShipmentsCountOrderByAggregateInput_1.ShipmentsCountOrderByAggregateInput)
], ShipmentsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsAvgOrderByAggregateInput_1.ShipmentsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShipmentsAvgOrderByAggregateInput_1.ShipmentsAvgOrderByAggregateInput)
], ShipmentsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsMaxOrderByAggregateInput_1.ShipmentsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShipmentsMaxOrderByAggregateInput_1.ShipmentsMaxOrderByAggregateInput)
], ShipmentsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsMinOrderByAggregateInput_1.ShipmentsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShipmentsMinOrderByAggregateInput_1.ShipmentsMinOrderByAggregateInput)
], ShipmentsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShipmentsSumOrderByAggregateInput_1.ShipmentsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShipmentsSumOrderByAggregateInput_1.ShipmentsSumOrderByAggregateInput)
], ShipmentsOrderByWithAggregationInput.prototype, "_sum", void 0);
ShipmentsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ShipmentsOrderByWithAggregationInput", {
        isAbstract: true
    })
], ShipmentsOrderByWithAggregationInput);
exports.ShipmentsOrderByWithAggregationInput = ShipmentsOrderByWithAggregationInput;
